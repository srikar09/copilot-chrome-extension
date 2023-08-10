import * as React from "react";

/**
 * TextProps is an interface that defines the props for the Text component
 *
 * @export
 * @interface TextProps
 * */
export interface TextProps {
  // Defines the color of the text
  color:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "medium"
    | "dark";
  // Defines the class name of the text
  className?: string;
  // Defines the children of the text
  children?: React.ReactNode;
  // Defines the size of the text
  size: "tiny" | "small" | "medium" | "large";
}

/**
 * `Text` is a component that displays text
 * @param {string} color - defines the color of the text
 * @param {string} className - defines the class name of the text
 * @param {React.ReactNode} children - defines the children of the text
 * @param {string} size - defines the size of the text
 * @returns {JSX.Element} - Text component
 * */
const Text = React.forwardRef<HTMLButtonElement, TextProps>(
  ({ className, ...props }, ref) => {
    let textComponent = null;
    switch (props.size) {
      case "small":
        textComponent = <h3 className={className}>{props.children}</h3>;
        break;
      case "large":
        textComponent = <h1 className={className}>{props.children}</h1>;
        break;
      case "medium":
        textComponent = <h2 className={className}>{props.children}</h2>;
        break;
      case "tiny":
        textComponent = <p className={className}>{props.children}</p>;
        break;
      default:
        textComponent = <p className={className}>{props.children}</p>;
    }

    return (
      <span className={className} style={{ color: props.color }} {...props}>
        {textComponent}
      </span>
    );
  }
);

export { Text };
