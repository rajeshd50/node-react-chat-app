import React, { useEffect, useState } from 'react'
import { getColorFor } from '../../config'

interface UserLogoProps {
  imageLink?: string;
  name?: string;
}

function UserLogo({
  imageLink,
  name,
}: UserLogoProps) {

  const [color, setColor] = useState('')
  const [colorStyle, setColorStyle] = useState<any>({})

  /**
   * set color according to name
   */
  useEffect(() => {
    if (name) {
      setColor(getColorFor(name));
    }
  }, [name])
  /**
   * set color style object
   */
  useEffect(() => {
    if (color) {
      setColorStyle({backgroundColor: color})
    }
  }, [color])

  /**
   * get name initials 2 characters
   */
  const getInitials = () => {
    if (!name || !name.length) {
      return 'NA'
    }
    let parts = name.toUpperCase().split(' ')
    return parts && parts.length >= 2 ? parts.map(x => x.charAt(0)).filter(x => x).slice(0, 2).join('') : parts && parts.length == 1 ? parts[0].slice(0, 2) : 'NA'
  }

  if (!imageLink && !name) {
    return null
  }

  return (
    <React.Fragment>
      <div className="user-logo-container" style={colorStyle}>
      {
        imageLink ? <img src={imageLink} alt="User" /> : null
      }
      {
        name && !imageLink ? <span>{getInitials()}</span> : null
      }
      </div>
    </React.Fragment>
  )
}

export default UserLogo
