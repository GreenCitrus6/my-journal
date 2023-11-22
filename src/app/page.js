import Image from 'next/image'
import RootLayout from './layout'
import SideBar from './components/sidebar'
import ItemCard from './components/itemcard'
import EntryField from './components/entryfield'
import NavTop from './components/navtop'
import AddButton from './components/buttons/addbutton'

{/* functionality to do list:
      autosave notes to local storage
      ability to export all notes to seperate text files, that then download as a .zip file
      ability to change sorting of notes (a-z, z-a, newest, oldest, etc.)
*/}

export default function Home() {
  return (
    <RootLayout>
    <div className="flex flex-row justify-end">
      <SideBar>
        <NavTop>
        </NavTop>
        <ItemCard />
        {/* <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard /> */}
      </SideBar>
      <EntryField />
    </div>
    </RootLayout>
  )
}
