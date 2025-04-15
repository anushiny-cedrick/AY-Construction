import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm AY Construction Bot. How can I help you today?",
            sender: 'bot'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        // Add user message
        const userMessage = { text: inputMessage, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInputMessage('');

        // Simulate bot response after 1 second
        setTimeout(() => {
            const botResponses = [
                "I can help with project inquiries, scheduling, and general questions about AY Construction.",
                "Our business hours are 24/7 for emergency services. Regular hours are Mon-Fri 8am-6pm.",
                "You can reach our team directly at (123) 456-7890 for immediate assistance.",
                "We specialize in residential, commercial, and industrial construction projects.",
                "For detailed project inquiries, please visit our Projects page or contact our office."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Sample quick questions
    const quickQuestions = [
        "What are your working hours?",
        "Do you offer emergency services?",
        "How can I request a quote?",
        "What areas do you serve?"
    ];

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {!isOpen ? (
                <button className="chatbot-toggle" onClick={toggleChatbot}>
                    <FaRobot className="chatbot-icon" />
                    <span>AY Bot</span>
                </button>
            ) : (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-title">
                            <FaRobot className="chatbot-icon" />
                            <h3>AY Construction Assistant</h3>
                        </div>
                        <button className="close-btn" onClick={toggleChatbot}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender}`}
                            >
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="quick-questions">
                        {quickQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="quick-question"
                                onClick={() => setInputMessage(question)}
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                        />
                        <button
                            className="send-btn"
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim()}
                        >
                            <IoMdSend />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;