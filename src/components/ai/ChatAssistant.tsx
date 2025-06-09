import React, { useState } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Unable to reach assistant.' },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-2 w-72 bg-white shadow-lg rounded-lg flex flex-col h-96">
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === 'user' ? 'text-right' : 'text-left text-purple-600'
                }
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded-l px-2 py-1 text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 text-white px-3 rounded-r text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        {open ? '×' : 'AI'}
      </button>
    </div>
  );
};

export default ChatAssistant;
