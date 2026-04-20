import { motion } from "framer-motion";
import { theme } from "../../styles/theme";

export const Title = ({ children, animated = true, variant = "light", ...props }) => {
    const Component = animated ? motion.h1 : "h1";

    const titleProps = animated ? {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    } : {};

    const textColor = variant === "dark" ? theme.textPrimary : theme.textPrimaryLight;

    return (
        <Component
            {...titleProps}
            style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                color: textColor,
                marginBottom: "2rem",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                textAlign: "center",
                ...props.style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export const SectionTitle = ({ children, animated = true, variant = "light", ...props }) => {
    const Component = animated ? motion.h2 : "h2";

    const titleProps = animated ? {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, delay: 0.1 }
    } : {};

    const textColor = variant === "dark" ? theme.textPrimary : theme.textPrimaryLight;

    return (
        <Component
            {...titleProps}
            style={{
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: "600",
                color: textColor,
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
                ...props.style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export const Value = ({ children, animated = true, variant = "light", ...props }) => {
    const Component = animated ? motion.div : "div";

    const valueProps = animated ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.3, delay: 0.2, type: "spring" }
    } : {};

    const textColor = variant === "dark" ? theme.textPrimary : theme.textPrimaryLight;

    return (
        <Component
            {...valueProps}
            style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: "700",
                color: textColor,
                letterSpacing: "-0.02em",
                ...props.style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export const Text = ({ children, variant: textVariant = "body", animated = false, colorVariant = "light", ...props }) => {
    const Component = animated ? motion.p : "p";

    const variants = {
        body: {
            fontSize: "1rem",
            fontWeight: "400",
            color: colorVariant === "dark" ? theme.textPrimary : theme.textPrimaryLight,
        },
        secondary: {
            fontSize: "0.875rem",
            fontWeight: "400",
            color: colorVariant === "dark" ? theme.textSecondary : theme.textSecondaryLight,
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: "500",
            color: colorVariant === "dark" ? theme.textTertiary : theme.textTertiaryLight,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
        }
    };

    const textProps = animated ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.3 }
    } : {};

    return (
        <Component
            {...textProps}
            style={{
                ...variants[textVariant],
                lineHeight: "1.6",
                ...props.style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
};