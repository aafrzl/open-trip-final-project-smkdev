export function CompassIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={154}
      height={154}
      fill="none"
      viewBox="0 0 154 154"
      className={className}>
      <path
        fill="#FF385C"
        d="M76.811 153.412c42.201 0 76.412-34.21 76.412-76.412 0-42.201-34.211-76.412-76.412-76.412C34.611.588.4 34.798.4 77c0 42.202 34.211 76.412 76.412 76.412ZM61.597 61.785l54.262-23.834-23.833 54.263-54.263 23.834 23.834-54.263Z"
      />
      <path
        fill="#FF385C"
        d="M76.81 84.894a8.766 8.766 0 1 0 0-17.532 8.766 8.766 0 0 0 0 17.532Z"
      />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      className={className}>
      <path
        fill="#FFC619"
        d="m18.156 6.896-4.959-.72L10.98 1.68a.628.628 0 0 0-1.121 0L7.642 6.175l-4.959.721a.624.624 0 0 0-.345 1.067l3.588 3.498-.848 4.94a.624.624 0 0 0 .906.657l4.436-2.332 4.435 2.332a.624.624 0 0 0 .906-.658l-.847-4.94 3.588-3.497a.624.624 0 0 0 .181-.358.623.623 0 0 0-.527-.709Z"
      />
    </svg>
  );
}
