import styled from "styled-components"
import { FlipCard } from "./FlipCard"
import { useEffect, useState } from "react"
import shuffle from "lodash/shuffle"

const GameContainer = styled.main<{
  won: boolean
  matching: boolean
}>`
  background: white;
  margin: 0 auto;
  min-width: 400px;
  width: 70%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  border: 1px solid;
  border-color: ${(props) =>
    props.won ? "green" : "white"};
  pointer-events: ${(props) =>
    props.matching ? "none" : "auto"};

  > * {
    flex-basis: 25%;
  }
`

// If you have strong feelings about dogs vs cats
// feel free to change this to always return your
// preferred furry friend
const getApiUrl = () => {
  if (Math.random() > 0.5) {
    return "https://api.thedogapi.com/"
  } else {
    return "https://api.thedogapi.com/"
  }
}

export const Game = () => {
  const [cards, setCards] = useState<any[]>([])
  const [matched, setMatched] = useState([])
  const [currMatched, setCurrMatched] = useState([])
  const [matching, setMatching] = useState(false)
  const [turns, setTurns] = useState(0)
  const [status, setStatus] = useState("start")

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        `${getApiUrl()}v1/images/search?limit=8`
      )
      const images = await response.json()
      const cards = [...images, ...images]
      setCards(shuffle(cards))
    })()
  }, [])

  const flipped = (i) => {
    return matched.includes(i) || currMatched.includes(i)
  }

  const onFlip = (i) => () => {
    if (matching) return
    if (flipped(i)) return

    let curr = [...currMatched]
    if (curr.length < 2) {
      curr.push(i)
      setCurrMatched(curr)
    }

    if (curr.length === 2) {
      setMatching(true)
    }
  }

  useEffect(() => {
    if (!matching) return

    const [a, b] = currMatched
    const imageA = cards[a]
    const imageB = cards[b]
    if (imageA.id === imageB.id) {
      const newMatched = [...matched, a, b]
      setMatched(newMatched)
      if (newMatched.length === cards.length) {
        setStatus("won")
      }
      setCurrMatched([])
      setTurns((v) => v + 1)
      setMatching(false)
    } else {
      setTimeout(() => {
        setCurrMatched([])
        setTurns((v) => v + 1)
        setMatching(false)
      }, 1000)
    }
  }, [matching])

  const onReset = () => {
    setMatched([])
    setCurrMatched([])
    setTurns(0)
    setStatus("start")
  }

  return (
    <div>
      <p>
        <span>Turns: {turns + 1}</span>&nbsp;
        <button onClick={onReset}>Restart</button>
        <span>{status === "won" && "You won!"}</span>
      </p>
      <GameContainer
        won={status === "won"}
        matching={matching}
      >
        {cards.map((image, i) => (
          <FlipCard
            key={i}
            image={image}
            flipped={flipped(i)}
            onFlip={onFlip(i)}
          />
        ))}
      </GameContainer>
    </div>
  )
}

import styled from "styled-components"

const CardWrap = styled.div`
  height: 80px;
  position: relative;
  cursor: pointer;
  background: #edede9;
`

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &.flipped {
    transform: rotateY(180deg);
  }
`

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const CardBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

type CardProps = {
  image: any
  flipped: boolean
  onFlip: () => void
}

export const FlipCard = ({
  image,
  flipped,
  onFlip,
}: CardProps) => {
  return (
    <CardWrap onClick={onFlip}>
      <Card className={flipped ? "flipped" : ""}>
        <CardFront></CardFront>
        <CardBack>
          <img src={image.url} />
        </CardBack>
      </Card>
    </CardWrap>
  )
}
