import { Button } from './Button';
import '../styles/sidebar.scss';
import { GenreResponseProps } from '../App';


interface ISidebarProps {
  handleClickButton(genreId: number): void
  readonly selectedGenreId: number
  readonly genres: readonly GenreResponseProps[]
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: ISidebarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
