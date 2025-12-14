<script lang="ts">
    import {
        questions,
        type Question,
        type Statement,
    } from "$lib/flashcards/preclinical_dd";

    // Shuffle function using Fisher-Yates algorithm
    function shuffle<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Game state
    let shuffledQuestions = $state<Question[]>(shuffle(questions));
    let currentIndex = $state(0);
    let selectedStatements = $state<Set<number>>(new Set());
    let hasSubmitted = $state(false);
    let correctCount = $state(0);
    let gameComplete = $state(false);

    // Derived state
    let currentQuestion = $derived(shuffledQuestions[currentIndex]);
    let progress = $derived(
        ((currentIndex + 1) / shuffledQuestions.length) * 100,
    );

    // Check if answer is correct (all true statements selected, no false ones)
    function isAnswerCorrect(): boolean {
        const trueIndices = currentQuestion.statements
            .map((s, i) => (s.isTrue ? i : -1))
            .filter((i) => i !== -1);

        const selectedArray = Array.from(selectedStatements);

        if (selectedArray.length !== trueIndices.length) return false;

        return trueIndices.every((i) => selectedStatements.has(i));
    }

    function toggleStatement(index: number) {
        if (hasSubmitted) return;

        const newSet = new Set(selectedStatements);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        selectedStatements = newSet;
    }

    function submitAnswer() {
        if (hasSubmitted) return;
        hasSubmitted = true;

        if (isAnswerCorrect()) {
            correctCount++;
        }
    }

    function nextQuestion() {
        if (currentIndex < shuffledQuestions.length - 1) {
            currentIndex++;
            selectedStatements = new Set();
            hasSubmitted = false;
        } else {
            gameComplete = true;
        }
    }

    function restartQuiz() {
        shuffledQuestions = shuffle(questions);
        currentIndex = 0;
        selectedStatements = new Set();
        hasSubmitted = false;
        correctCount = 0;
        gameComplete = false;
    }

    function getStatementClass(index: number, statement: Statement): string {
        const baseClass =
            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3";

        if (!hasSubmitted) {
            if (selectedStatements.has(index)) {
                return `${baseClass} border-cyan-400 bg-cyan-500/20 text-white`;
            }
            return `${baseClass} border-slate-600 bg-slate-800/50 text-slate-200 hover:border-slate-400 hover:bg-slate-700/50`;
        }

        // After submission
        if (statement.isTrue) {
            return `${baseClass} border-emerald-400 bg-emerald-500/20 text-emerald-100`;
        }

        if (selectedStatements.has(index) && !statement.isTrue) {
            return `${baseClass} border-rose-400 bg-rose-500/20 text-rose-100`;
        }

        return `${baseClass} border-slate-700 bg-slate-800/30 text-slate-400`;
    }
</script>

<svelte:head>
    <title>Preclinical Quiz</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div
    class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 font-['Plus_Jakarta_Sans',system-ui,sans-serif]"
>
    <!-- Background pattern -->
    <div class="fixed inset-0 opacity-30">
        <div
            class="absolute inset-0"
            style="background-image: radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0); background-size: 40px 40px;"
        ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {#if !gameComplete}
            <!-- Header -->
            <div class="mb-8">
                <div class="mb-4 flex items-center justify-between">
                    <h1
                        class="text-2xl font-semibold tracking-tight text-white"
                    >
                        Preclinical Quiz
                    </h1>
                    <span
                        class="rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-medium text-indigo-300"
                    >
                        {currentIndex + 1} / {shuffledQuestions.length}
                    </span>
                </div>

                <!-- Progress bar -->
                <div class="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                        class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 ease-out"
                        style="width: {progress}%"
                    ></div>
                </div>
            </div>

            <!-- Question Card -->
            <div
                class="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
            >
                <h2
                    class="mb-6 text-xl font-medium leading-relaxed text-white sm:text-2xl"
                >
                    {currentQuestion.question}
                </h2>

                <p class="mb-4 text-sm font-medium text-slate-400">
                    Select all statements that are <span class="text-cyan-400"
                        >TRUE</span
                    >:
                </p>

                <!-- Statements -->
                <div class="space-y-3">
                    {#each currentQuestion.statements as statement, index}
                        <button
                            type="button"
                            class={getStatementClass(index, statement)}
                            onclick={() => toggleStatement(index)}
                            disabled={hasSubmitted}
                        >
                            <span
                                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors {selectedStatements.has(
                                    index,
                                )
                                    ? 'border-current bg-current'
                                    : 'border-current'}"
                            >
                                {#if selectedStatements.has(index)}
                                    <svg
                                        class="h-3 w-3 text-slate-900"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                {/if}
                            </span>
                            <span class="text-left">{statement.text}</span>

                            {#if hasSubmitted}
                                <span class="ml-auto shrink-0">
                                    {#if statement.isTrue}
                                        <svg
                                            class="h-5 w-5 text-emerald-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    {:else if selectedStatements.has(index)}
                                        <svg
                                            class="h-5 w-5 text-rose-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    {/if}
                                </span>
                            {/if}
                        </button>
                    {/each}
                </div>

                <!-- Action buttons -->
                <div class="mt-6 flex justify-end gap-3">
                    {#if !hasSubmitted}
                        <button
                            type="button"
                            onclick={submitAnswer}
                            disabled={selectedStatements.size === 0}
                            class="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-indigo-400 hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                        >
                            Submit Answer
                        </button>
                    {:else}
                        <button
                            type="button"
                            onclick={nextQuestion}
                            class="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-indigo-400 hover:shadow-indigo-500/40"
                        >
                            {currentIndex < shuffledQuestions.length - 1
                                ? "Next Question"
                                : "See Results"}
                            <svg
                                class="ml-2 inline h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    {/if}
                </div>
            </div>

            <!-- Score indicator -->
            <div class="mt-6 text-center">
                <span class="text-sm text-slate-500">
                    Current Score: <span class="font-semibold text-indigo-400"
                        >{correctCount}</span
                    >
                    / {currentIndex + (hasSubmitted ? 1 : 0)}
                </span>
            </div>
        {:else}
            <!-- Results screen -->
            <div class="flex min-h-[70vh] flex-col items-center justify-center">
                <div
                    class="w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12"
                >
                    <div class="mb-6">
                        {#if correctCount / shuffledQuestions.length >= 0.8}
                            <div
                                class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20"
                            >
                                <span class="text-4xl">🏆</span>
                            </div>
                            <h2 class="text-2xl font-bold text-emerald-400">
                                Excellent!
                            </h2>
                        {:else if correctCount / shuffledQuestions.length >= 0.6}
                            <div
                                class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20"
                            >
                                <span class="text-4xl">👍</span>
                            </div>
                            <h2 class="text-2xl font-bold text-cyan-400">
                                Good Job!
                            </h2>
                        {:else if correctCount / shuffledQuestions.length >= 0.4}
                            <div
                                class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20"
                            >
                                <span class="text-4xl">📚</span>
                            </div>
                            <h2 class="text-2xl font-bold text-amber-400">
                                Keep Studying!
                            </h2>
                        {:else}
                            <div
                                class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/20"
                            >
                                <span class="text-4xl">💪</span>
                            </div>
                            <h2 class="text-2xl font-bold text-rose-400">
                                Don't Give Up!
                            </h2>
                        {/if}
                    </div>

                    <p class="mb-2 text-slate-400">Your Score</p>

                    <div class="mb-6">
                        <span class="text-6xl font-bold text-white"
                            >{correctCount}</span
                        >
                        <span class="text-2xl text-slate-500"
                            >/{shuffledQuestions.length}</span
                        >
                    </div>

                    <div class="mb-8">
                        <div
                            class="h-3 overflow-hidden rounded-full bg-slate-800"
                        >
                            <div
                                class="h-full rounded-full transition-all duration-1000 ease-out {correctCount /
                                    shuffledQuestions.length >=
                                0.8
                                    ? 'bg-emerald-500'
                                    : correctCount / shuffledQuestions.length >=
                                        0.6
                                      ? 'bg-cyan-500'
                                      : correctCount /
                                              shuffledQuestions.length >=
                                          0.4
                                        ? 'bg-amber-500'
                                        : 'bg-rose-500'}"
                                style="width: {(correctCount /
                                    shuffledQuestions.length) *
                                    100}%"
                            ></div>
                        </div>
                        <p class="mt-2 text-sm text-slate-500">
                            {Math.round(
                                (correctCount / shuffledQuestions.length) * 100,
                            )}% Accuracy
                        </p>
                    </div>

                    <button
                        type="button"
                        onclick={restartQuiz}
                        class="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-indigo-400 hover:shadow-indigo-500/40"
                    >
                        <svg
                            class="mr-2 inline h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                        Try Again
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>
