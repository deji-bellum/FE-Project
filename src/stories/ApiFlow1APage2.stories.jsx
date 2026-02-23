import { ApiFlow1APage2 } from "./ApiFlow1APage2";
import { action } from "@storybook/addon-actions";

export default {
  title: "Existential/Pages/ApiFlow1APage2",
  component: ApiFlow1APage2,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ApiFlow1APage2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  onNext: action("NextPage - Create API Clicked"),
  onPrevious: action("PreviousPage - Go Back Clicked"),
};

export const SelectedState = Template.bind({});
SelectedState.args = {
  ...Default.args,
  // You can pass initial state here if your component supports it for testing
};