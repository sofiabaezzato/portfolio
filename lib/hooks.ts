import { useActiveSectionContext } from "@/context/ActiveSectionContext"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeLastClick } = useActiveSectionContext()

  const { ref, inView } = useInView({
    threshold,
  })

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 800) {
      setActiveSection(sectionName)
    }
  },[inView, timeLastClick, sectionName, setActiveSection])

  return {
    ref,
  }
}