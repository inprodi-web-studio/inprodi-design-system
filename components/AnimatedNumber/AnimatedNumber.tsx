import CountUp from "react-countup";

export interface AnimatedNumberProps {
    value : number;
};

export default function AnimatedNumber({
    value,
} : AnimatedNumberProps) {
    return (
        <CountUp
            redraw
            preserveValue
            enableScrollSpy
            decimal="."
            decimals={2}
            delay={0.5}
            duration={2}
            start={0}
            separator=","
            end={value ?? 0}
            className="vizion-animated-number"
        />
    );
};