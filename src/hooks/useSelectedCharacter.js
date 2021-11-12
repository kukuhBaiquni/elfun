/* eslint-disable max-len */
import {
  baseClass, firstClass, secondClass, transcendentClass, thirdClass,
} from 'constant/characters'

const useSelectedCharacter = (props) => {
  const {
    characterId, classId, pathId,
  } = props
  const classList = [...baseClass, ...firstClass, ...secondClass, ...transcendentClass, ...thirdClass]
  return classList.find(
    (item) => item.characterId === characterId && item.classId === classId && item.pathId === pathId,
  )
}

export default useSelectedCharacter
