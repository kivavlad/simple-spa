import {memo} from "react";
import useTranslate from "../../hooks/use-translate";
import type {ISelect} from "../../types/i-select";
import Head from "../../components/head";
import Watch from "../../components/watch";
import Select from "../../components/select";

const Header: React.FC = () => {
  const {lang, setLang, t} = useTranslate();

  const langs: ISelect[] = [
    {id: 1, title: 'ru', value: 'ru'}, 
    {id: 2, title: 'en', value: 'en'}
  ]

  return (
    <Head title={t('title')}>
      <Watch/>
      <Select value={lang} setValue={setLang} options={langs}/>
    </Head>
  )
}

export default memo(Header);