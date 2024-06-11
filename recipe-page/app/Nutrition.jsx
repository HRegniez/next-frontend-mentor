import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { young_serif } from '@/app/layout'

function Nutrition() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className={cn(young_serif.className, 'text-2xl font-bold text-secondary')}>Nutrition</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted mb-2'>The table below shows nutritional values per serving without the additional fillings.</p>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Calories</TableCell>
              <TableCell className="text-secondary font-bold">277kcal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carbs</TableCell>
              <TableCell className="text-secondary font-bold">0g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Protein</TableCell>
              <TableCell className="text-secondary font-bold">20g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fat</TableCell>
              <TableCell className="text-secondary font-bold">22g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Nutrition

