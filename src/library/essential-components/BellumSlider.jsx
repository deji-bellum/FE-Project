import { Slider } from "@chakra-ui/react";

export const BellumSlider = ({ 
  min = 0, 
  max = 100, 
  value, 
  onChange, 
  color = "blue.500" 
}) => {
  return (
    <Slider.Root 
      min={min} 
      max={max} 
      value={[value]} // V3 expects an array for the value
      onValueChange={(details) => onChange(details.value[0])}
      width="full"
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Range bg={color} />
        </Slider.Track>
        <Slider.Thumb index={0} boxSize={6} />
      </Slider.Control>
    </Slider.Root>
  );
};