import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const GaugeChart = ({
  value = 75,
  min = 0,
  max = 100,
  title = "Performance",
  unit = "%",
  size = 240,
  colors = {
    low: "#FF6B6B",
    medium: "#FFD93D",
    high: "#6BCF7F",
    background: "#F8F9FA",
  },
}) => {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1)
  const animatedPercentage = Math.min(Math.max((animatedValue - min) / (max - min), 0), 1)

  const bgColor = "white"
  const textColor = "gray.700"
  const borderColor = "gray.200"

  // Determine current color based on percentage
  const getCurrentColor = () => {
    if (percentage <= 0.33) return colors.low
    if (percentage <= 0.66) return colors.medium
    return colors.high
  }

  const currentColor = getCurrentColor()
  const radius = 80
  const strokeWidth = 12
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * Math.PI // Half circle
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - percentage * circumference

  const needleAngle = (180 - animatedPercentage * 180) * (Math.PI / 180)
  const needleLength = radius - 15
  const needleX = 120 + Math.cos(needleAngle) * needleLength
  const needleY = 120 + Math.sin(needleAngle) * needleLength

  return (
    <VStack spacing={6} align="center" p={6}>
      <Text fontSize="2xl" fontWeight="bold" color={textColor} letterSpacing="tight">
        {title}
      </Text>

      <Box
        position="relative"
        bg={bgColor}
        borderRadius="2xl"
        p={8}
        boxShadow="xl"
        border="1px solid"
        borderColor={borderColor}
      >
        <svg width="240" height="140" viewBox="0 0 240 140">
          {/* Background arc segments */}
          <defs>
            <linearGradient id="lowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.low} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colors.low} stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mediumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.medium} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colors.medium} stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="highGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.high} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colors.high} stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background track */}
          <path
            d="M 40 120 A 80 80 0 0 1 200 120"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Low range (0-33%) */}
          <path
            d="M 40 120 A 80 80 0 0 1 93.33 56.67"
            fill="none"
            stroke="url(#lowGradient)"
            strokeWidth={strokeWidth - 2}
            strokeLinecap="round"
          />

          {/* Medium range (33-66%) */}
          <path
            d="M 93.33 56.67 A 80 80 0 0 1 146.67 56.67"
            fill="none"
            stroke="url(#mediumGradient)"
            strokeWidth={strokeWidth - 2}
            strokeLinecap="round"
          />

          {/* High range (66-100%) */}
          <path
            d="M 146.67 56.67 A 80 80 0 0 1 200 120"
            fill="none"
            stroke="url(#highGradient)"
            strokeWidth={strokeWidth - 2}
            strokeLinecap="round"
          />

          {/* Active progress arc */}
          <path
            d="M 40 120 A 80 80 0 0 1 200 120"
            fill="none"
            stroke={currentColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            filter="url(#glow)"
            style={{
              transition: "stroke-dashoffset 0.8s ease-in-out",
            }}
          />

          {[0, 25, 50, 75, 100].map((tick, index) => {
            const tickAngle = (180 - (tick / 100) * 180) * (Math.PI / 180)
            const innerRadius = radius - 8
            const outerRadius = radius + 8
            const x1 = 120 + Math.cos(tickAngle) * innerRadius
            const y1 = 120 + Math.sin(tickAngle) * innerRadius
            const x2 = 120 + Math.cos(tickAngle) * outerRadius
            const y2 = 120 + Math.sin(tickAngle) * outerRadius

            return (
              <g key={tick}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" />
                <text
                  x={120 + Math.cos(tickAngle) * (outerRadius + 15)}
                  y={120 + Math.sin(tickAngle) * (outerRadius + 15)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="#718096"
                  fontWeight="500"
                >
                  {tick}
                </text>
              </g>
            )
          })}

          <g>
            <line
              x1="120"
              y1="120"
              x2={needleX}
              y2={needleY}
              stroke="#2D3748"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
            <circle cx="120" cy="120" r="6" fill={currentColor} stroke="#2D3748" strokeWidth="2" />
          </g>
        </svg>

        {/* Value display */}
        <Box position="absolute" bottom="20px" left="50%" transform="translateX(-50%)" textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" color={currentColor} lineHeight="1">
            {value}
            {unit}
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Current Value
          </Text>
        </Box>
      </Box>

      {/* Modern legend */}
      <HStack spacing={6} bg={bgColor} p={4} borderRadius="xl" border="1px solid" borderColor={borderColor}>
        <HStack spacing={2}>
          <Box w="3" h="3" bg={colors.low} borderRadius="full" />
          <Text fontSize="sm" color={textColor} fontWeight="medium">
            Low
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Box w="3" h="3" bg={colors.medium} borderRadius="full" />
          <Text fontSize="sm" color={textColor} fontWeight="medium">
            Medium
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Box w="3" h="3" bg={colors.high} borderRadius="full" />
          <Text fontSize="sm" color={textColor} fontWeight="medium">
            High
          </Text>
        </HStack>
      </HStack>

      {/* Range indicators */}
      <HStack spacing={3}>
        <Badge colorScheme="gray" variant="subtle" px={3} py={1} borderRadius="full" fontSize="xs">
          Min: {min}
        </Badge>
        <Badge colorScheme="gray" variant="subtle" px={3} py={1} borderRadius="full" fontSize="xs">
          Max: {max}
        </Badge>
      </HStack>
    </VStack>
  )
}

export default GaugeChart
