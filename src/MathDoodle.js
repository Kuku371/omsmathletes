export default function MathDoodle({ variant = "notebook", className = "" }) {
  const common = {
    viewBox: "0 0 180 140",
    role: "img",
    "aria-hidden": "true",
    className: `math-doodle ${className}`
  };

  if (variant === "notebook") {
    return (
      <svg {...common}>
        <rect
          className="doodle-paper"
          x="34"
          y="20"
          width="92"
          height="100"
          rx="10"
        />

        <line x1="50" y1="47" x2="108" y2="47" />
        <line x1="50" y1="63" x2="105" y2="63" />
        <line x1="50" y1="79" x2="94" y2="79" />

        <path d="M62 98 C77 82, 88 112, 105 91" />

        <g className="doodle-pencil">
          <path d="M111 93 L146 58 L157 69 L122 104 Z" />
          <path d="M111 93 L106 109 L122 104" />
          <line x1="140" y1="64" x2="151" y2="75" />
        </g>
      </svg>
    );
  }

  if (variant === "geometry") {
    return (
      <svg {...common}>
        <circle cx="90" cy="67" r="37" />

        <path d="M42 107 L90 28 L139 107 Z" />

        <line x1="42" y1="107" x2="139" y2="107" />

        <path d="M90 67 L118 95" />

        <circle
          className="doodle-dot"
          cx="90"
          cy="67"
          r="4"
        />

        <circle
          className="doodle-dot"
          cx="118"
          cy="95"
          r="4"
        />
      </svg>
    );
  }

  if (variant === "graph") {
    return (
      <svg {...common}>
        <line x1="35" y1="108" x2="148" y2="108" />
        <line x1="50" y1="120" x2="50" y2="22" />

        <path
          className="doodle-accent"
          d="M55 99 C72 89, 70 55, 91 60 C112 65, 109 28, 140 35"
        />

        <line
          className="doodle-grid"
          x1="35"
          y1="83"
          x2="148"
          y2="83"
        />

        <line
          className="doodle-grid"
          x1="35"
          y1="58"
          x2="148"
          y2="58"
        />

        <line
          className="doodle-grid"
          x1="75"
          y1="120"
          x2="75"
          y2="22"
        />

        <line
          className="doodle-grid"
          x1="100"
          y1="120"
          x2="100"
          y2="22"
        />

        <line
          className="doodle-grid"
          x1="125"
          y1="120"
          x2="125"
          y2="22"
        />
      </svg>
    );
  }

  if (variant === "nodes") {
    return (
      <svg {...common}>
        <line x1="48" y1="42" x2="91" y2="69" />
        <line x1="91" y1="69" x2="136" y2="40" />
        <line x1="91" y1="69" x2="129" y2="108" />
        <line x1="91" y1="69" x2="47" y2="105" />
        <line x1="48" y1="42" x2="47" y2="105" />
        <line x1="136" y1="40" x2="129" y2="108" />

        {[
          [48, 42],
          [91, 69],
          [136, 40],
          [129, 108],
          [47, 105]
        ].map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            className="doodle-node"
            cx={x}
            cy={y}
            r="8"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M34 104 C51 72, 67 88, 82 55 C98 21, 119 54, 146 31" />

      <path
        className="doodle-accent"
        d="M41 39 L67 39 L67 65"
      />

      <circle
        className="doodle-dot"
        cx="113"
        cy="88"
        r="18"
      />

      <line x1="100" y1="88" x2="126" y2="88" />
      <line x1="113" y1="75" x2="113" y2="101" />
    </svg>
  );
}
