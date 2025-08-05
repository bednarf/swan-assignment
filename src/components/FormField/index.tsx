import {
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
  useMemo,
} from "react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import styles from "./FormField.module.css";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Description text below the label */
  description?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Custom class name for the label */
  labelClassName?: string;
  /** Custom class name for the description */
  descriptionClassName?: string;
  /** The form element to wrap */
  children: ReactNode;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      description,
      required,
      disabled = false,
      className,
      labelClassName,
      descriptionClassName,
      children,
      id,
      ...props
    },
    ref,
  ) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    const descriptionId = `${fieldId}-description`;

    // Clone children and add necessary props
    const enhancedChildren = useMemo(
      () =>
        Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              id: fieldId,
              disabled: disabled || (child.props as any)?.disabled,
            } as any);
          }
          return child;
        }),
      [],
    );

    return (
      <div ref={ref} className={cn(styles.container, className)} {...props}>
        {required !== undefined && required ? (
          <span className={styles.required}>
            {"Required field"}
            <div className={styles.requiredSign}></div>
          </span>
        ) : (
          <span className={styles.required}>{"Optional field"}</span>
        )}

        {enhancedChildren}

        {description && (
          <p
            id={descriptionId}
            className={cn(styles.description, descriptionClassName)}
          >
            {description}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = "FormField";
