/**
 * button.tsx
 * Composant de bouton personnalisé avec plusieurs variantes et tailles
 * Basé sur Radix UI et personnalisé pour le design du site
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Définition des variantes de bouton avec class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap typography-button ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-btn",
        sm: "h-9 px-3 rounded-btn",
        lg: "h-12 px-8 rounded-btn",
        icon: "h-10 w-10 rounded-full btn-icon p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Interface définissant les props du bouton
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Indique si le bouton doit agir comme un enfant */
  asChild?: boolean
}

/**
 * Composant Button
 * Bouton personnalisé avec différentes variantes et tailles
 * Supporte l'option asChild pour envelopper d'autres éléments
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Utilise Slot de Radix UI si asChild est true, sinon utilise un bouton standard
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }