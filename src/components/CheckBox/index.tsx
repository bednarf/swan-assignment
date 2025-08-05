import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import styles from "./CheckBox.module.css";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text for the checkbox */
  label?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, disabled, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label className={cn(styles.label, disabled && styles.disabled)}>
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={styles.checkbox}
            hidden
            {...props}
          />
          <span className={styles.checkmark}>
            <img src="./checkmark.svg" className={styles.checkIcon} />
          </span>
          {label && label}
        </label>
      </div>
    );
  },
);

CheckBox.displayName = "CheckBox";
