import { useEffect } from "react"

export const useStopScroll = (optionalBooleanWatch = []) => {
    useEffect(() => {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        if (optionalBooleanWatch.some((el) => el === true) === true) { // checks that any of the booleans are true, if even 1 of the are then it activates the stop scroll
            document.body.style.overflowY = "hidden"
            document.body.style.position = "fixed"
        }

        const handleWindowScroll = () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        }

        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            if (optionalBooleanWatch.every((el) => el === false) === false) {

                document.body.style.overflowY = ""
                document.body.style.position = ""
                window.scrollTo({ left: 0, top: parseInt(scrollY || '0'), behavior: "smooth" });
                window.removeEventListener('scroll', handleWindowScroll)
            }
        }
    }, [...optionalBooleanWatch])
}