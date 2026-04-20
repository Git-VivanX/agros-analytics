import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { memo } from "react";

const Card = memo(({ children, style = {}, hover = true, glassmorphism = false, variant = "light" }) => {

    const getCardStyles = () => {
        switch (variant) {
            case "dark":
                return {
                    background: glassmorphism
                        ? theme.cardDark
                        : theme.bgTertiary,
                    backdropFilter: glassmorphism ? theme.backdrop : "none",
                    border: `1px solid ${theme.borderDark}`,
                    color: theme.textPrimary,
                    shadow: theme.shadowDark,
                    shadowHover: theme.shadowDarkMd,
                };
            case "light":
            default:
                return {
                    background: theme.card,
                    backdropFilter: theme.backdropLight,
                    border: `1px solid ${theme.border}`,
                    color: theme.textPrimary,
                    shadow: theme.shadow,
                    shadowHover: theme.shadowMd,
                };
        }
    };

    const cardStyles = getCardStyles();

    const cardStyle = {
        background: cardStyles.background,
        backdropFilter: cardStyles.backdropFilter,
        borderRadius: "20px",
        padding: "24px",
        border: cardStyles.border,
        boxShadow: cardStyles.shadow,
        position: "relative",
        overflow: "hidden",
        color: cardStyles.color,
        ...style,
    };

    if (hover) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                    scale: 1.02,
                    boxShadow: cardStyles.shadowHover,
                    background: variant === "dark"
                        ? theme.cardHoverDark
                        : theme.cardHover,
                }}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
                style={cardStyle}
            >
                <div style={{ position: "relative", zIndex: 1 }}>
                    {children}
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={cardStyle}
        >
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </motion.div>
    );
});

export default Card;