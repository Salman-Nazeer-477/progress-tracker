
function Date({ children }) {
    return (<>
        <button className="day">{children}</button>
    </>)
}
export default function Calendar() {
    return (
    <div className="calendar">
        <div>
            <Date>1</Date>
            <Date>2</Date>
            <Date>3</Date>
            <Date>4</Date>
            <Date>5</Date>
            <Date>6</Date>
            <Date>7</Date>
        </div>
        <div>
            <Date>8</Date>
            <Date>9</Date>
            <Date>10</Date>
            <Date>11</Date>
            <Date>12</Date>
            <Date>13</Date>
            <Date>14</Date>
        </div>
        <div>
            <Date>15</Date>
            <Date>16</Date>
            <Date>17</Date>
            <Date>18</Date>
            <Date>19</Date>
            <Date>20</Date>
            <Date>21</Date>
        </div>
        <div>
            <Date>22</Date>
            <Date>23</Date>
            <Date>24</Date>
            <Date>25</Date>
            <Date>26</Date>
            <Date>27</Date>
            <Date>28</Date>
        </div>
    </div>)
}