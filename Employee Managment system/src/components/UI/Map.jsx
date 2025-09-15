import  React from "react"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

// Sample location data
const locations = [
  { id: 1, lat: 40, lng: 30, label: "Store A" },
  { id: 2, lat: 60, lng: 50, label: "Store B" },
  { id: 3, lat: 30, lng: 70, label: "Store C" },
  { id: 4, lat: 50, lng: 40, label: "Store D" },
  { id: 5, lat: 70, lng: 20, label: "Store E" },
  { id: 6, lat: 20, lng: 60, label: "Store F" },
  { id: 7, lat: 45, lng: 55, label: "Store G" },
  { id: 8, lat: 55, lng: 65, label: "Store H" },
  { id: 9, lat: 35, lng: 45, label: "Store I" },
  { id: 10, lat: 65, lng: 35,label: "Store J" },
  { id: 11, lat: 25, lng: 75,label: "Store K" },
  { id: 12, lat: 75, lng: 25,label: "Store L" },
]

export default function MapView() {
  const canvasRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null); 
  // Draw the map
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw map background
    ctx.fillStyle = "#f8fafc"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw some building shapes
    ctx.fillStyle = "#e2e8f0"
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const width = 30 + Math.random() * 70
      const height = 30 + Math.random() * 70

      // Add rounded corners to buildings
      const radius = 4
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.fill()
    }

    // Draw roads
    ctx.strokeStyle = "#cbd5e1"
    ctx.lineWidth = 6

    // Horizontal roads
    for (let i = 0; i < 3; i++) {
      const y = (canvas.height * (i + 1)) / 4
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Vertical roads
    for (let i = 0; i < 4; i++) {
      const x = (canvas.width * (i + 1)) / 5
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Draw location pins
    locations.forEach((location) => {
      const x = (location.lng / 100) * canvas.width
      const y = (location.lat / 100) * canvas.height

      // Draw pin shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.beginPath()
      ctx.arc(x, y + 2, 9, 0, Math.PI * 2)
      ctx.fill()

      // Draw pin
      ctx.fillStyle =
        selectedLocation === location.id ? "#f59e0b" : hoveredLocation === location.id ? "#3b82f6" : "#ef4444"

      ctx.beginPath()
      ctx.arc(x, y, 8, 0, Math.PI * 2)
      ctx.fill()

      // Draw white center
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [selectedLocation, hoveredLocation])

  // Handle mouse interactions
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if mouse is over any location
    let hovered = null
    for (const location of locations) {
      const locX = (location.lng / 100) * canvas.width
      const locY = (location.lat / 100) * canvas.height

      const distance = Math.sqrt(Math.pow(x - locX, 2) + Math.pow(y - locY, 2))
      if (distance < 10) {
        hovered = location.id
        break
      }
    }

    setHoveredLocation(hovered)
  }

  const handleMouseLeave = () => {
    setHoveredLocation(null)
  }

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if clicked on any location
    for (const location of locations) {
      const locX = (location.lng / 100) * canvas.width
      const locY = (location.lat / 100) * canvas.height

      const distance = Math.sqrt(Math.pow(x - locX, 2) + Math.pow(y - locY, 2))
      if (distance < 10) {
        setSelectedLocation(location.id === selectedLocation ? null : location.id)
        break
      }
    }
  }

  // Find the selected location
  const activeLocation = locations.find((loc) => loc.id === selectedLocation)

  return (
    <div className="relative h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />

      {/* Highlighted location info */}
      {selectedLocation && (
        <div className="absolute top-4 right-4 bg-white text-gray-800 p-4 rounded-xl shadow-xl border border-amber-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-amber-500 p-1.5 rounded-lg">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">{activeLocation?.label}</span>
          </div>
          <div className="text-sm space-y-1 text-gray-600">
            <p className="flex justify-between">
              <span>Agent:</span>
              <span className="font-medium text-gray-800">John Doe</span>
            </p>
            <p className="flex justify-between">
              <span>Status:</span>
              <span className="font-medium text-green-600">Active</span>
            </p>
            <p className="flex justify-between">
              <span>Last Check-in:</span>
              <span className="font-medium text-gray-800">10:45 AM</span>
            </p>
          </div>
        </div>
      )}

      {/* Hover tooltip */}
      {hoveredLocation && hoveredLocation !== selectedLocation && (
        <div
          className="absolute bg-white shadow-lg rounded-lg p-3 text-sm pointer-events-none border border-gray-100"
          style={{
            left:
              ((locations.find((loc) => loc.id === hoveredLocation)?.lng || 0) / 100) *
                (canvasRef.current?.width || 0) +
              10,
            top:
              ((locations.find((loc) => loc.id === hoveredLocation)?.lat || 0) / 100) *
                (canvasRef.current?.height || 0) +
              10,
          }}
        >
          <div className="font-medium">{locations.find((loc) => loc.id === hoveredLocation)?.label}</div>
          <div className="text-xs text-gray-500">Click to view details</div>
        </div>
      )}
    </div>
  )
}
