type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body-large" | "body" | "caption";
type TextAlign = "left" | "center" | "right";
type TextColor =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "muted"
    | "accent"
    | "foreground";
type TextWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

const variantClasses: Record<TextVariant, string> = {
    h1: "text-3xl sm:text-4xl lg:text-5xl leading-tight",
    h2: "text-2xl sm:text-3xl lg:text-4xl leading-tight",
    h3: "text-xl sm:text-2xl lg:text-3xl leading-snug",
    h4: "text-lg sm:text-xl lg:text-2xl leading-snug",
    h5: "text-base sm:text-lg lg:text-xl leading-normal",
    h6: "text-sm sm:text-base lg:text-lg leading-normal",
    "body-large": "text-base sm:text-lg leading-8",
    body: "text-sm sm:text-base leading-7",
    caption: "text-xs sm:text-sm leading-6",
};
const alignClasses: Record<TextAlign, string> = {
    right: "text-right",
    center: "text-center",
    left: "text-left",
};
const colorClasses: Record<TextColor, string> = {
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    success: "text-success",
    info: "text-info",
    warning: "text-warning",
    danger: "text-danger",
    muted: "text-muted-foreground",
    accent: "text-primary-hover",
    foreground: "text-foreground",
};
const weightClasses: Record<TextWeight, string> = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
};

interface TextProps {
    children?: React.ReactNode;
    tag?: TextTag;
    variant?: TextVariant;
    align?: TextAlign;
    color?: TextColor;
    weight?: TextWeight;
    className?: string;
}

function Text({
                  children,
                  tag = "p",
                  variant = "body",
                  align = "right",
                  color = "foreground",
                  weight = "normal",
                  className = ""
              }: TextProps) {

    const Tag: TextTag = tag;

    return (
        <Tag className={`${variantClasses[variant]} 
                         ${alignClasses[align]} 
                         ${colorClasses[color]}
                         ${weightClasses[weight]}
                         ${className}
                         font-sans`}
        >
            {children}
        </Tag>
    );
}

export default Text;