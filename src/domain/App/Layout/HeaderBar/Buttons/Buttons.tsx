import React, { FC } from 'react'
import notify from 'devextreme/ui/notify'
import { Button } from 'devextreme-react/button'

const Buttons: FC = () => {
  const defaultButtonClick = () => {
    notify('Фильтры установлены в значения по умолчанию', 'success')
  }

  const executeButtonClick = () => {
    notify('Выгрузка произведена', 'success')
  }

  return (
    <div className="buttons">
      <div className="button">
        <Button
          stylingMode="outlined"
          text="По умолчанию"
          type="normal"
          onClick={defaultButtonClick}
        />
      </div>
      <div className="button">
        <Button
          stylingMode="outlined"
          text="Выгрузить"
          type="normal"
          onClick={executeButtonClick}
        />
      </div>
    </div>
  )
}

export default Buttons
