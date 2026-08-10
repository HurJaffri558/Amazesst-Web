"use client";

import { useEffect } from 'react';

const N8nChat = () => {
    useEffect(() => {
        // Load n8n chat stylesheet
        const link = document.createElement('link');
        link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Inject Custom CSS using the OFFICIAL variables from documentation
        const styleOverride = document.createElement('style');
        styleOverride.id = 'n8n-chat-overrides';
        styleOverride.innerHTML = `
            :root {
                /* Primary Brand Colors */
                --chat--color--primary: #2E5BFF !important;
                --chat--color--primary-shade-50: #2563eb !important; /* Darker blue for hover */
                --chat--color--primary--shade-100: #1d4ed8 !important; /* Even darker blue */
                
                /* Secondary Color (User Bubble) */
                --chat--color--secondary: #2E5BFF !important;
                
                /* Layout Colors */
                --chat--color-dark: #030303 !important; /* Header Background */
                --chat--color-light: #f8fafc !important; /* Chat Body Background (Light Gray) */
                --chat--color-white: #ffffff !important;
                
                /* Header Customization */
                --chat--header--background: #030303 !important;
                --chat--header--color: #ffffff !important;
                
                /* Toggle Button */
                --chat--toggle--background: #2E5BFF !important;
                --chat--toggle--hover--background: #2563eb !important;
                
                /* User Message Bubble */
                --chat--message--user--background: #2E5BFF !important;
                --chat--message--user--color: #ffffff !important;
                
                /* Bot Message Bubble */
                --chat--message--bot--background: #ffffff !important;
                --chat--message--bot--color: #000000 !important;
            }
        `;
        document.head.appendChild(styleOverride);

        // Load n8n chat bundle and initialize
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n.srv1186513.hstgr.cloud/webhook/55cfd1c3-2707-4bf0-b85b-e0117137772d/chat',
        target: '#n8n-chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
            'Hi! 👋',
            'How can we help your Amazon brand grow today?'
        ],
        i18n: {
            en: {
                title: 'Amazesst AI Assistant',
                subtitle: "Smart, Predictable, & Data-Driven.",
                inputPlaceholder: 'Ask us anything...',
                getStarted: 'Start Chat',
            }
        }
      });
    `;
        document.body.appendChild(script);

        return () => {
            // Cleanup on unmount
            if (link.parentNode) document.head.removeChild(link);
            if (styleOverride.parentNode) document.head.removeChild(styleOverride);
            if (script.parentNode) document.body.removeChild(script);
            const chatElement = document.querySelector('#n8n-chat');
            if (chatElement) chatElement.remove();
        };
    }, []);

    return null;
};

export default N8nChat;
