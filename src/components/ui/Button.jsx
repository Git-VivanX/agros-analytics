import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { memo } from "react";

const Button = memo(({
    children,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    onClick,
    style = {},
    colorVariant = "light", 
    ...props
}) => {
    const getButtonStyles = () => {
        const baseStyles = {
            fontWeight: "600",
            letterSpacing: "0.025em",
            cursor: disabled || loading ? "not-allowed" : "pointer",
            opacity: disabled || loading ? 0.6 : 1,
            transition: "all 0.2s ease",
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            borderRadius: "12px",
        };

        switch (variant) {
            case "primary":
                return {
                    ...baseStyles,
                    background: theme.accent,
                    border: "none",
                    color: "#ffffff",
                    hoverBg: theme.accentSecondary,
                    hoverColor: "#ffffff",
                    shadow: theme.shadow,
                };
            case "secondary":
                return {
                    ...baseStyles,
                    background: theme.surfaceSecondary,
                    border: "none",
                    color: theme.textPrimary,
                    hoverBg: theme.surfaceTertiary,
                    hoverColor: theme.textPrimary,
                    shadow: "none",
                };
            case "ghost":
                return {
                    ...baseStyles,
                    background: "transparent",
                    border: "none",
                    color: theme.textPrimary,
                    hoverBg: "rgba(0,0,0,0.05)",
                    hoverColor: theme.textPrimary,
                    shadow: "none",
                };
            case "danger":
                return {
                    ...baseStyles,
                    background: theme.dangerLight,
                    border: "none",
                    color: theme.danger,
                    hoverBg: theme.danger,
                    hoverColor: "#ffffff",
                    shadow: "none",
                };
            default:
                return {
                    ...baseStyles,
                    background: theme.accent,
                    border: "none",
                    color: "#ffffff",
                    hoverBg: theme.accentSecondary,
                    hoverColor: "#ffffff",
                    shadow: theme.shadow,
                };
        }
    };

    const buttonStyles = getButtonStyles();

    const sizes = {
        small: {
            padding: "8px 16px",
            fontSize: "0.875rem",
        },
        medium: {
            padding: "12px 24px",
            fontSize: "1rem",
        },
        large: {
            padding: "16px 32px",
            fontSize: "1.125rem",
        }
    };

    const buttonStyle = {
        ...buttonStyles,
        ...sizes[size],
        ...style,
    };

    return (
        <motion.button
            style={buttonStyle}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={!disabled && !loading ? {
                scale: 1.02,
                backgroundColor: buttonStyles.hoverBg,
                color: buttonStyles.hoverColor,
                boxShadow: buttonStyles.shadow,
            } : {}}
            whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 25 }}
            {...props}
        >
            {}

            <span style={{ position: "relative", zIndex: 1 }}>
                {loading ? "Loading..." : children}
            </span>
        </motion.button>
    );
});

export default Button;