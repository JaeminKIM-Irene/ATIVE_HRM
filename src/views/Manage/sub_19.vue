<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">인력 정보 변경 이력</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="select" style="display:flex">유형</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="type" style="display:flex">검색기간</label>
                <v-date-picker v-model="startDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <div class="range">~</div>
                <v-date-picker v-model="endDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <input type="checkbox" id="addInfo"/>
                <label for="addInfo">그룹웨어 제외:</label>
                <input id="search" type="text" placeholder="이름/계정"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container4">
        <table class="sub2-table">
            <colgroup>
                <col width="13%">
                <col width="13%">
                <col width="5%">
                <col width="23%">
                <col width="16%">
                <col width="9%">
                <col width="14%">
                <col width="7%">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="2">변경 대상</th>
                    <th rowspan="2">유형</th>
                    <th rowspan="2">변경내용</th>
                    <th rowspan="2">변경일자</th>
                    <th colspan="3">변경자</th>
                </tr>
                <tr>
                    <th>회사명</th>
                    <th>이름</th>
                    <th>회사명</th>
                    <th>계정</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in listArray" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.name}}</td>
                    <td>{{list.type}}</td>
                    <td>{{list.content}}</td>
                    <td>{{list.date}}</td>
                    <td>{{list.compName2}}</td>
                    <td>{{list.account2}}</td>
                    <td>{{list.name2}}</td>
                </tr>
            </tbody>
        </table>
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
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    {compName:"ATIVE 홀딩스", name:"박민수", type:"신규", content:"IT 인력으로 배정", date:"2022-11-30 14:00:16", compName2:"ATIVE디엔알", account2:"dhsong@ATIVE.co.kr", name2:"송대호"},
                    
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

<style src="../../css/Manage/sub_19.css" scoped />