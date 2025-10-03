import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Progress } from '@/components/ui/progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  args: {
    modelValue: 50,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export const Empty: Story = {
  args: {
    modelValue: 0,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export const Quarter: Story = {
  args: {
    modelValue: 25,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export const Half: Story = {
  args: {
    modelValue: 50,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export const ThreeQuarters: Story = {
  args: {
    modelValue: 75,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export const Complete: Story = {
  args: {
    modelValue: 100,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};
