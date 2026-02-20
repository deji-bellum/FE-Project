import { VStack, HStack, Box } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumIcon } from "../../library/essential-components/BellumIcon";
import { 
  Pencil, Download, Upload, LayoutPanelLeft, 
  BarChart3, Box as BoxIcon, ShoppingCart, AppWindow,
  Users, Wallet, Activity, Settings, HelpCircle, User 
} from "lucide-react";

const NavItem = ({ icon, label, isActive = false }) => (
  <HStack gap="4" cursor="pointer" width="100%" opacity={isActive ? 1 : 0.6} _hover={{ opacity: 1 }}>
    <BellumIcon icon={icon} size={20} color="white" />
    <BellumText type="body1" color="white" style={{ fontWeight: isActive ? '600' : '400' }}>
      {label}
    </BellumText>
  </HStack>
);

const SectionHeader = ({ title }) => (
  <Box mb="2">
    <BellumText type="body2" color="white" style={{ opacity: 0.4, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' }}>
      {title}
    </BellumText>
  </Box>
);

export const DataSection = () => (
  <VStack align="flex-start" gap="4" width="100%">
    <SectionHeader title="DATA" />
    <NavItem icon={Pencil} label="API creation" isActive={true} />
    <NavItem icon={Download} label="Data download" />
    <NavItem icon={Upload} label="Data sending" />
    <NavItem icon={LayoutPanelLeft} label="Derived data" />
  </VStack>
);

export const AppSection = () => (
  <VStack align="flex-start" gap="4" width="100%">
    <SectionHeader title="APP" />
    <NavItem icon={BarChart3} label="Analytics builder" />
    <NavItem icon={BoxIcon} label="App builder" />
    <NavItem icon={ShoppingCart} label="Marketplace" />
    <NavItem icon={AppWindow} label="App store" />
  </VStack>
);

export const ClusterSection = () => (
  <VStack align="flex-start" gap="4" width="100%">
    <SectionHeader title="CLUSTER" />
    <NavItem icon={Users} label="Administration" />
    <NavItem icon={Wallet} label="Cost saving" />
    <NavItem icon={Activity} label="Clusterhealth" />
  </VStack>
);

export const OthersSection = () => (
  <VStack align="flex-start" gap="4" width="100%" pb="10">
    <NavItem icon={Settings} label="Settings" />
    <NavItem icon={HelpCircle} label="Help" />
    <NavItem icon={User} label="Profile" />
  </VStack>
);