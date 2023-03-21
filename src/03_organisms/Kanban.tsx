import PGoalKanban from '@/03_organisms/PGoalKanban'
import SGoalKanban from '@/03_organisms/SGoalKanban'
import { ProductKanban } from '@/03_organisms/ProductKanban'
import SprintKanban from '@/03_organisms/SprintKanban'

export function Kanban() {
  return <>
    <PGoalKanban />
    <SGoalKanban />
    <ProductKanban />
    <SprintKanban />
  </>
}
