export default function useSeperateText(header: string) {
  const heroGreetingText = header || "";
  const words = heroGreetingText.split(/\s+/); // Split by one or more whitespace characters
  const numWords = words.length;

  let greetingContent;

  if (numWords >= 3) {
    const middlePoint = Math.floor(numWords / 2);
    // Indices for the three middle words
    const firstMiddleWordIndex = middlePoint - 1;
    const lastMiddleWordIndex = middlePoint + 1;

    const beforeText = words.slice(0, firstMiddleWordIndex).join(" ");
    const middleText = words
      .slice(firstMiddleWordIndex, lastMiddleWordIndex + 1)
      .join(" ");
    const afterText = words.slice(lastMiddleWordIndex + 1).join(" ");

    greetingContent = (
      <div>
        <span>{beforeText}</span>
        <span>{beforeText && middleText ? " " : ""}</span>
        <span className="text-primary">{middleText}</span>
        <span>{middleText && afterText ? " " : ""}</span>
        <span>{afterText}</span>
      </div>
    );
  } else {
    greetingContent = heroGreetingText;
  }

  return greetingContent;
}
