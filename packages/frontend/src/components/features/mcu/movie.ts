import { ThinDate } from "../../common/thin-data"

type Movie = {
	name: string
	publishedAt: ThinDate
}

type MovieInfinitySaga = Movie & {
	index: number
	phase: 1 | 2 | 3
}

export const movies: MovieInfinitySaga[] = [
	{ index: 1, name: "アイアンマン", publishedAt: new ThinDate(2008, 5, 2), phase: 1 },
	{
		index: 2,
		name: "インクレディブル・ハルク",
		publishedAt: new ThinDate(2008, 6, 13),
		phase: 1,
	},
	{ index: 3, name: "アイアンマン2", publishedAt: new ThinDate(2010, 5, 7), phase: 1 },
	{ index: 4, name: "マイティ・ソー", publishedAt: new ThinDate(2011, 5, 7), phase: 1 },
	{
		index: 5,
		name: "キャプテン・アメリカ／ザ・ファースト・アベンジャー",
		publishedAt: new ThinDate(2011, 7, 22),
		phase: 1,
	},
	{
		index: 6,
		name: "アベンジャーズ",
		publishedAt: new ThinDate(2012, 5, 4),
		phase: 1,
	},
	{ index: 7, name: "アイアンマン3", publishedAt: new ThinDate(2013, 5, 3), phase: 2 },
	{
		index: 8,
		name: "マイティ・ソー／ダーク・ワールド",
		publishedAt: new ThinDate(2013, 11, 3),
		phase: 2,
	},
	{
		index: 9,
		name: "キャプテン・アメリカ／ウィンター・ソルジャー",
		publishedAt: new ThinDate(2014, 4, 4),
		phase: 2,
	},
	{
		index: 10,
		name: "ガーディアンズ・オブ・ギャラクシー",
		publishedAt: new ThinDate(2014, 8, 1),
		phase: 2,
	},
	{
		index: 11,
		name: "アベンジャーズ／エイジ・オブ・ウルトロン",
		publishedAt: new ThinDate(2015, 5, 1),
		phase: 2,
	},
	{
		index: 12,
		name: "アントマン",
		publishedAt: new ThinDate(2015, 7, 17),
		phase: 2,
	},
	{
		index: 13,
		name: "シビル・ウォー／キャプテン・アメリカ",
		publishedAt: new ThinDate(2016, 5, 6),
		phase: 3,
	},
	{
		index: 14,
		name: "ドクター・ストレンジ",
		publishedAt: new ThinDate(2016, 11, 4),
		phase: 3,
	},
	{
		index: 15,
		name: "ガーディアンズ・オブ・ギャラクシー：リミックス",
		publishedAt: new ThinDate(2017, 5, 5),
		phase: 3,
	},
	{
		index: 16,
		name: "スパイダーマン：ホームカミング",
		publishedAt: new ThinDate(2017, 7, 7),
		phase: 3,
	},
	{
		index: 17,
		name: "マイティ・ソー バトルロイヤル",
		publishedAt: new ThinDate(2017, 11, 3),
		phase: 3,
	},
	{
		index: 18,
		name: "ブラックパンサー",
		publishedAt: new ThinDate(2018, 2, 16),
		phase: 3,
	},
	{
		index: 19,
		name: "アベンジャーズ／インフィニティ・ウォー",
		publishedAt: new ThinDate(2018, 4, 27),
		phase: 3,
	},
	{
		index: 20,
		name: "アントマン＆ワスプ",
		publishedAt: new ThinDate(2018, 7, 6),
		phase: 3,
	},
	{
		index: 21,
		name: "キャプテン・マーベル",
		publishedAt: new ThinDate(2016, 4, 26),
		phase: 3,
	},
	{
		index: 22,
		name: "アベンジャーズ／エンドゲーム",
		publishedAt: new ThinDate(2019, 4, 26),
		phase: 3,
	},
	{
		index: 23,
		name: "スパイダーマン：ファー・フロム・ホーム",
		publishedAt: new ThinDate(2017, 7, 2),
		phase: 3,
	},
	{
		index: 24,
		name: "スパイダーマン：ノー・ウェイ・ホーム",
		publishedAt: new ThinDate(2021, 12, 17),
		phase: 3,
	},
	{
		index: 25,
		name: "スパイダーマン：ブランド・ニュー・デイ",
		publishedAt: new ThinDate(2026, 7, 31),
		phase: 3,
	},
]
