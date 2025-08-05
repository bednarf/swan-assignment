import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "../components/FormField";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    terms: false,
    newsletter: false,
    notifications: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms to continue";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "28rem",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "1.5rem",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "1.5rem",
        }}
      >
        Registration Form
      </h2>

      <FormField
        description="We'll use this to send you important updates"
        required
      >
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "0.5rem 0.75rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
          }}
        />
      </FormField>

      <FormField
        description="Please read and accept our terms and conditions"
        required
      >
        <CheckBox
          label="I agree to the terms and conditions"
          checked={formData.terms}
          onChange={(e) => handleInputChange("terms", e.target.checked)}
        />
      </FormField>

      <FormField description="Choose how you would like to receive communications from us">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <CheckBox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange("newsletter", e.target.checked)}
          />
          <CheckBox
            label="Enable notifications"
            checked={formData.notifications}
            onChange={(e) =>
              handleInputChange("notifications", e.target.checked)
            }
          />
        </div>
      </FormField>

      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          border: "none",
          cursor: "pointer",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      >
        Submit
      </button>
    </form>
  );
};

const meta: Meta<typeof ExampleForm> = {
  title: "Examples/Form Integration",
  component: ExampleForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
