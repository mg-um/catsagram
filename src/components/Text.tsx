import React from 'react';
import styled from 'styled-components';

interface BaseTextProps {
  size: number;
}

const Text = styled.span<BaseTextProps>`
  font-size: ${props => props.size}px;
`

const BoldText = styled(Text)`
  font-weight: bold;
`

interface TextProps {
  className?: string;
}

export const Title: React.FC<TextProps> = ({ children, className }) => {
  return (
    <BoldText size={24} className={className}>
      {children}
    </BoldText>
  )
}

export const Subtitle: React.FC<TextProps> = ({ children, className }) => {
  return (
    <BoldText size={20} className={className}>
      {children}
    </BoldText>
  )
}

export const Body1: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text size={16} className={className}>
      {children}
    </Text>
  )
}

export const Body2: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text size={14} className={className}>
      {children}
    </Text>
  )
}

export const Caption: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text size={10} className={className}>
      {children}
    </Text>
  )
}
