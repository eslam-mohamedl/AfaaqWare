export interface QuestionBoxProps {
  question: string;
  answer: string;
}

export default function QuestionBox({ question, answer }: QuestionBoxProps) {
  return (
    <>
      <div className="bg-bg-alt mx-auto mt-4 mb-5 max-w-4xl rounded-lg p-6 shadow-md">
        <h3 className="text-primary mb-2 text-xl font-semibold">{question}</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-400">{answer}</p>
      </div>
    </>
  );
}
