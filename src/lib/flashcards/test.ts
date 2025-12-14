export interface Statement {
    text: string;
    isTrue: boolean;
}

export interface Question {
    id: number;
    question: string;
    statements: Statement[];
}

export const questions: Question[] = [
    {
        id: 1,
        question: "Which statements about the human heart are true?",
        statements: [
            { text: "The heart has four chambers", isTrue: true },
            { text: "The heart pumps blood through the lungs", isTrue: true },
            { text: "The heart is located on the right side of the chest", isTrue: false },
            { text: "The average heart beats about 100,000 times per day", isTrue: true },
        ],
    },
    {
        id: 2,
        question: "Which statements about water are true?",
        statements: [
            { text: "Water boils at 100°C at sea level", isTrue: true },
            { text: "Ice is denser than liquid water", isTrue: false },
            { text: "Water is composed of hydrogen and oxygen", isTrue: true },
            { text: "Pure water conducts electricity well", isTrue: false },
        ],
    },
    {
        id: 3,
        question: "Which statements about the solar system are true?",
        statements: [
            { text: "The Sun is a star", isTrue: true },
            { text: "Mars is larger than Earth", isTrue: false },
            { text: "Jupiter has the most moons in our solar system", isTrue: false },
            { text: "Venus is the hottest planet", isTrue: true },
            { text: "Saturn's rings are made mostly of ice and rock", isTrue: true },
        ],
    },
];

