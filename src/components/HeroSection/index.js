import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Baking Mode Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new accoun today and receive $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowFoward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
