import { BellumText } from "../library/essential-components/BellumText";

export default {
  title: "Components/BellumText",
  component: BellumText,
};

export const AllHeadings = () => (
  <div>
    <BellumText type="h1">Heading 1 - Bellum</BellumText>
    <BellumText type="h2">Heading 2 - Bellum</BellumText>
    <BellumText type="h3">Heading 3 - Bellum</BellumText>
    <BellumText type="h4">Heading 4 - Bellum</BellumText>
    <BellumText type="body1">Body 1 - Regular Text</BellumText>
    <BellumText type="body2">Body 2 - Small Text</BellumText>
  </div>
);