import { Select, createListCollection } from "@chakra-ui/react";

export const BellumDropdown = ({ options, value, onValueChange, placeholder, label }) => {
  // 1. Transform your array into a Chakra collection
  const collection = createListCollection({
    items: options,
  });

  return (
    <Select.Root 
      collection={collection} 
      value={value} 
      onValueChange={onValueChange}
    >
      {label && <Select.Label>{label}</Select.Label>}
      <Select.Trigger>
        <Select.ValueText placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item} key={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};