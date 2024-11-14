import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Componente genérico para manejar el tipo de icono
const Icon = ({ baseName, styleType, ...props }) => {
  const iconName = `${baseName}-${styleType}`;
  return <Ionicons name={iconName} size={24} color="black" {...props} />;
};

// Componentes específicos para cada icono

// Iconos del NavBar
export const HomePageIcon = (props) => <Icon baseName="home" {...props} />;
export const ProgressIcon = (props) => <Icon baseName="podium" {...props} />;
export const AchievementsIcon = (props) => (
  <Icon baseName="ribbon" {...props} />
);
export const SettingsIcon = (props) => <Icon baseName="settings" {...props} />;

// Iconos para Check
export const CheckMarkIcon = (props) => (
  <Icon baseName="checkmark" {...props} />
);

// Iconos redes sociales
export const InstagramIcon = (props) => (
  <FontAwesome6 name="instagram" size={24} color="black" {...props} />
);
export const TwitterIcon = (props) => (
  <FontAwesome6 name="x-twitter" size={24} color="black" {...props} />
);
export const TikTokIcon = (props) => (
  <FontAwesome6 name="tiktok" size={24} color="black" {...props} />
);
