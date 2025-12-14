# Flashcards Quiz App

## Overview

A flashcard-style quiz application built with SvelteKit and Tailwind CSS. Users are presented with questions and must select all the **true** statements from a list of options.

## Data Source

Quiz questions are sourced from `src/lib/flashcards/Quiz Questions.docx`. The document contains:
- A numbered list of questions
- Each question has a bullet point list of statements
- Some statements are true (correct answers), others are false

## How It Works

1. User sees a question
2. Multiple statements are displayed as selectable options
3. User selects all statements they believe are true
4. User submits their answer
5. Feedback shows which answers were correct/incorrect
6. User proceeds to the next question

## Tech Stack

- **Framework**: SvelteKit (Svelte 5)
- **Styling**: Tailwind CSS v4
- **Runtime**: Bun

## Development

```bash
bun install
bun run dev
```

The app runs at `http://localhost:5173` by default.

