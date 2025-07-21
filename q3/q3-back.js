class Chatbot {
    constructor(domain) {
        this.domain = domain;
        this.responses = {
            'tech': {
                'what is javascript': 'JavaScript is a programming language used for web development.',
                'what is node': 'Node.js is a runtime for executing JavaScript outside the browser.',
                 'hello': 'Hi! How can I assist you today?',
                'bye': 'Goodbye! Have a great day!'
            }
        };
    }

    getResponse(message) {
        const lowerMessage = message.toLowerCase();
        const domainResponses = this.responses[this.domain] || this.responses['general'];
        return domainResponses[lowerMessage] || 'Sorry, I don’t understand that question.';
    }
}

module.exports = Chatbot;