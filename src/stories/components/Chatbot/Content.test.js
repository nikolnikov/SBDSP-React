import React from 'react';
import { render, screen, act } from '@testing-library/react';
import QDSChatbotContent from './Content.js';

// Helper to fast-forward timers for visibility delays
const flushTimers = async (ms = 2100) => {
    await act(async () => {
        jest.advanceTimersByTime(ms);
    });
};

describe('QDSChatbotContent', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('renders intro when no conversation yet', () => {
        render(
            <QDSChatbotContent
                hasConsented={false}
                introTitle="Hello"
                introMessage="Welcome"
                suggestionQuestions={[{ question: 'Sample?' }]}
            />
        );
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    it('shows primary response (string legacy array) after timer', async () => {
        const conversation = [{ id: '1', question: 'What is test A?' }];
        render(
            <QDSChatbotContent
                showConversation
                conversation={conversation}
                responses={['Primary answer. Follow part']}
            />
        );
        // Advance timers to reveal response
        await flushTimers();
        expect(screen.getByText(/Primary answer/)).toBeInTheDocument();
    });

    it('normalizes object responses and displays followup', async () => {
        const conversation = [{ id: '2', question: 'Q?' }];
        render(
            <QDSChatbotContent
                showConversation
                conversation={conversation}
                responses={[
                    { response: 'Main response', followup: 'Extra detail' }
                ]}
            />
        );
        await flushTimers();
        expect(screen.getByText('Main response')).toBeInTheDocument();
        expect(screen.getByText('Extra detail')).toBeInTheDocument();
    });

    it('falls back to defaultResponses import when no responses prop provided', async () => {
        const conversation = [{ id: '3', question: 'Fallback?' }];
        render(
            <QDSChatbotContent showConversation conversation={conversation} />
        );
        await flushTimers();
        const responses = screen.getAllByTestId('chatbot-response');
        expect(responses.length).toBeGreaterThan(0);
    });
});
