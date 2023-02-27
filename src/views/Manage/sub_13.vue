<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">비밀번호 변경</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-sub-container">
            <div class="sub-T2">비밀번호 변경</div>
            <div class="input-container">
                <div class="sub-T3">Old Password</div>
                <input id="curPass" type="text" placeholder="현재 비밀번호"/>
            </div>
            <div class="input-container">
                <div class="sub-T3">New Password</div>
                <input id="newPass" type="text" placeholder="새 비밀번호"/>
            </div>
            <div class="input-container">
                <div class="sub-T3">Confirm Password</div>
                <input id="confPass" type="text" placeholder="비밀번호 확인"/>
            </div>
            <button class="save-btn">변경하기</button>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                startDate:new Date(),
                endDate:new Date(),
                listArray: [
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    
                ],
            }
        },
        props: {
        },
        methods: {
            firstPage () {
                this.pageNum = 0;
            },
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            },
            lastPage () {
                this.pageNum = this.pageCount -1;
            },
            toPage (page) {
                this.pageNum = page;
            },
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) page += 1;
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                        end = start + this.pageSize;
                return this.listArray.slice(start, end);
            },
            pages () {
                const list=[];
                let startpage = parseInt(this.pageNum/3)*3+1;
                let lastPage = parseInt(this.pageNum / 3) * 3 + 3;
                let endpage = lastPage <= this.pageCount ? lastPage : this.pageCount;

                for(let index = startpage; index <= endpage; index+=1) {
                    list.push(index);
                }

                return list
            }
        }
    }
</script>

<style src="../../css/Manage/sub_13.css" scoped />