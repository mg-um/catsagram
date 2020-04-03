import React from "react"
import CardBase from "./Card"
import { Box } from "./Box"
import { Instagram } from 'react-content-loader'
import styled from "styled-components"

const LoadingPost: React.FC = () => (
  <Box mBottom='md'>
    <Card>
      <Instagram />
    </Card>
  </Box>

)

export default LoadingPost

const Card = styled(CardBase)`
  @media (max-width: 768px) {
    border: unset;
  }
`