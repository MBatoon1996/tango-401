import React from 'react';
import kanji from './kanji';
import './kanji.css';
import chapter1 from './chapters/chapter1';
import chapter2 from './chapters/chapter2';
import chapter3 from './chapters/chapter3';
import chapter4 from './chapters/chapter4';
import chapter5 from './chapters/chapter5';
import chapter6 from './chapters/chapter6';
import chapter7 from './chapters/chapter7';
import chapter8 from './chapters/chapter8';
import chapter9 from './chapters/chapter9';
import chapter10 from './chapters/chapter10';
import chapter11 from './chapters/chapter11';
import chapter12 from'./chapters/chapter12';

class Yomu extends React.Component {
    constructor(props) {
        super (props);
        console.log(this.props);

        const params = new URLSearchParams(props.location.serach);
        var test = props.location.search;
        console.log(test);
        if (test==='?set=tango'){
            this.state={
                characters: Object.keys(kanji.tango),
                set: "tango",
                setName: "単語",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=kanji-yomerebaii'){
            this.state={
                characters: Object.keys(kanji.yomerebaii),
                set: "yomu",
                setName: "読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=kanji-kaku'){
            this.state={
                characters: Object.keys(kanji.kaku),
                set: "kaku",
                setName: "書くのを覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=kanji-kaku'){
            this.state={
                characters: Object.keys(kanji.kaku),
                set: "kaku",
                setName: "書くのを覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=ch1-kaku') {
            this.state = {
                characters: Object.keys(chapter1.kaku),
                set: "kaku",
                setName: "第一課 読書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch1-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter1.yomerebaii),
                set: "yomu",
                setName: "第一課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch2-kaku') {
            this.state = {
                characters: Object.keys(chapter2.kaku),
                set: "kaku",
                setName: "第二課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch2-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter2.yomerebaii),
                set: "yomu",
                setName: "第二課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch3-kaku') {
            this.state = {
                characters: Object.keys(chapter3.kaku),
                set: "kaku",
                setName: "第三課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch3-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter3.yomerebaii),
                set: "yomu",
                setName: "第三課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch4-kaku') {
            this.state = {
                characters: Object.keys(chapter4.kaku),
                set: "kaku",
                setName: "第四課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch4-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter4.yomerebaii),
                set: "yomu",
                setName: "第四課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch5-kaku') {
            this.state = {
                characters: Object.keys(chapter5.kaku),
                set: "kaku",
                setName: "第五課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch5-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter5.yomerebaii),
                set: "yomu",
                setName: "第五課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch6-kaku') {
            this.state = {
                characters: Object.keys(chapter6.kaku),
                set: "kaku",
                setName: "第六課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch6-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter6.yomerebaii),
                set: "yomu",
                setName: "第六課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch7-kaku') {
            this.state = {
                characters: Object.keys(chapter7.kaku),
                set: "kaku",
                setName: "第七課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch7-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter7.yomerebaii),
                set: "yomu",
                setName: "第七課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch8-kaku') {
            this.state = {
                characters: Object.keys(chapter8.kaku),
                set: "kaku",
                setName: "第八課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch8-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter8.yomerebaii),
                set: "yomu",
                setName: "第八課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch9-kaku') {
            this.state = {
                characters: Object.keys(chapter9.kaku),
                set: "kaku",
                setName: "第九課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch9-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter9.yomerebaii),
                set: "yomu",
                setName: "第九課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch10-kaku') {
            this.state = {
                characters: Object.keys(chapter10.kaku),
                set: "kaku",
                setName: "第十課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch10-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter10.yomerebaii),
                set: "yomu",
                setName: "第十課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch11-kaku') {
            this.state = {
                characters: Object.keys(chapter11.kaku),
                set: "kaku",
                setName: "第十一課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch11-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter11.yomerebaii),
                set: "yomu",
                setName: "第十一課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch12-kaku') {
            this.state = {
                characters: Object.keys(chapter12.kaku),
                set: "kaku",
                setName: "第十二課 書くのを漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=ch12-yomerebaii') {
            this.state = {
                characters: Object.keys(chapter12.yomerebaii),
                set: "yomu",
                setName: "第十二課 読めればいい漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
    }

    componentDidMount(){
        this.setState(state => {
            //this.setState({ num: this.state.characters.length-1 }); // DELETE LATER
        });
    }

    shuffleArray = () => {
        var arr = this.state.characters;
        var i, j, temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        if (this.state.num === this.state.characters.length - 1) {
            this.setState({ nextDis: false });
        }
        this.setState({ characters: arr, shuffleHide: "d-none", yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi", num: 0, prevDis: true });
    }

    prevChar = () => {
        this.setState({ num: this.state.num - 1 });
        if(this.state.nextDis){
            this.setState({ nextDis: false });
        }
        if(this.state.num === 1) {
            this.setState({ prevDis: true });
        }

        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi" });
    }

    nextChar = () => {
        this.setState({ num: this.state.num + 1 });
        if(this.state.prevDis){
            this.setState({ prevDis: false });
        }
        if (this.state.num === this.state.characters.length - 2) {
            this.setState({ nextDis: true, shuffleHide: "" });
        }


        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi" });
    }

    yomikata = () => {
        this.setState({ yomikataButton: "d-none", yomikataClass: "" });
    }

    imi = () => {
        this.setState({ imiButton: "d-none", imiClass: "imi" });
    }

    render() {
        const { characters, set, setName, num, shuffleHide, yomikataButton, yomikataClass, imiButton, imiClass, prevDis, nextDis } = this.state;

        const setChooser = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].読み方
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].読み方
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].読み方
            }
        }

        const formSet = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].form
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].form
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].form
            }
        }

        const imiSet = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].意味
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].意味
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].意味
            }
        }

        return (
            <React.Fragment>
                <div className="btnContainer">
                    <button onClick={this.prevChar} disabled={prevDis}>Prev</button>
                    <button className={shuffleHide} onClick={this.shuffleArray}>Shuffle</button>
                    <button onClick={this.nextChar} disabled={nextDis}>Next</button>
                </div>
                <h3>{setName}</h3>
                <div className="kanjiContainer">
                    <h1 className="kanji">{characters[num]}</h1>
                </div>
                <div className="center">
                    <button className={yomikataButton} onClick={this.yomikata}>読み方</button>
                    <h2 className={yomikataClass}> {setChooser()}</h2>
                </div>
                <div className="center">
                    <button onClick={this.imi} className={imiButton}>意味</button>
                    <h3 className={imiClass}>{formSet()}</h3>
                </div>
                <div className="center">
                    <h3 className={imiClass}>{imiSet()}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default Yomu;