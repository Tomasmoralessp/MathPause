import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// Componente genérico para manejar el tipo de icono
const Icon = ({ baseName, styleType, ...props }) => {
  const iconName = `${baseName}-${styleType}`;
  return <Ionicons name={iconName} size={24} color="black" {...props} />;
};

// Componentes específicos para cada icono
export const HomePageIcon = (props) => <Icon baseName="home" {...props} />;
export const ProgressIcon = (props) => <Icon baseName="podium" {...props} />;
export const AchievementsIcon = (props) => (
  <Icon baseName="ribbon" {...props} />
);
export const SettingsIcon = (props) => <Icon baseName="settings" {...props} />;
export const CheckMarkIcon = (props) => (
  <Icon baseName="checkmark" {...props} />
);
