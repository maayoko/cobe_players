import React, { useRef, useEffect, useState } from "react";
import { CreatePlayerHeader } from "../../components/Header";

export interface Flag {
    name: string;
    code: string;
    emoji: string;
    unicode: string;
    image: string;
}

export interface Player {
    name: string;
    country: string;
    photoURL: string;
    nickname: string;
    earnings: number;
}

const NewPlayerPage = () => {

    const nameElement = useRef<HTMLInputElement>(null);
    const countryElement = useRef<HTMLSelectElement>(null);
    const photoElement = useRef<HTMLInputElement>(null);
    const nicknameElement = useRef<HTMLInputElement>(null);
    const earningsElement = useRef<HTMLInputElement>(null);
    const [flags, updateFlags] = useState<Flag[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name: string = (nameElement.current as HTMLInputElement).value;
        const country: string = (countryElement.current as HTMLSelectElement).value;
        const photoURL: string = (photoElement.current as HTMLInputElement).value;
        const nickname: string = (nicknameElement.current as HTMLInputElement).value;
        const earnings = Number((earningsElement.current as HTMLInputElement).value);

        const player: Player = {
            name,
            country,
            photoURL,
            nickname,
            earnings
        };

        console.log(player);
    }

    const handlePhotoChange = () => {
        const photo: string = (photoElement.current as HTMLInputElement).value;
        console.log(photo)
    }

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
            .then(response => response.json())
            .then(fetchedFlags => updateFlags(fetchedFlags));
    }, []);


    return (
        <div>
            <CreatePlayerHeader />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={nameElement} />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <select id="country" ref={countryElement}>
                        {flags.map(flag => <option key={flag.code} value={flag.name}>{flag.name} {flag.emoji}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="photo">Photo:</label>
                    <input type="text" id="photo" ref={photoElement} onChange={handlePhotoChange} />
                    {
                        photoElement.current && photoElement.current.value !== "" &&
                        <img src={photoElement.current.value} alt="Player photo" />
                    }
                </div>
                <div>
                    <label htmlFor="nickname">Nickname:</label>
                    <input type="text" id="nickname" ref={nicknameElement} />
                </div>
                <div>
                    <label htmlFor="earnings">Earnings:</label>
                    <input type="number" id="earnings" ref={earningsElement} />
                </div>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        </div>
    );
}

export default NewPlayerPage;